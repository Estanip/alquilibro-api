const bcrypt = require('bcryptjs');
const { User } = require('../../database/database');
const { generarJWT } = require('../../helpers/jwt');

const createUser = async (req, res) => {

    try {

        let { username, password } = req.body;

        if (!username || !password) {
            return res.json("No deben quedar campos vacios");
        };

        //Encriptar la password
        const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync(password, salt);

        //Guardar en la base de datos
        const [user, create] = await User.findOrCreate({
            where: {
                username: username
            },
            defaults: {
                username,
                password,
                image
            }
        });

        if (!create) {
            return res.json({
                ok: false,
                msg: 'Ya existe el usuario'
            });
        };

        // Generar JWT
        const token = await generarJWT(user.id, user.username);

        return res.json({
            ok: true,
            msg: 'Usuario creado con exito',
            uid: user.id,
            name: user.username,
            image: user.image,
            token
        })

    } catch (error) {
        return res.json({
            ok: false,
            msg: 'No se pudo crear el usuario',
            err: error.message
        })
    }
}

const loginUser = async (req, res) => {

    const { username, password } = req.body;

    try {
        const user = await User.findOne({
            where: { username: username }
        });

        if (!user) {
            return res.json({
                ok: false,
                msg: 'Nombre de usuario inexistente'
            });
        }

        //Confirma password
        const validaPassword = bcrypt.compareSync(password, user.password);

        if (!validaPassword) {
            return res.json({
                ok: false,
                msg: 'Password incorrecta'
            })
        }

        //Generar JWT
        const token = await generarJWT(user.id, user.username);


        return res.json({
            ok: true,
            uid: user.id,
            name: user.username,
            /*             image: user.image,
                        email: user.email, */
            token
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'No se puedo loguear con exito',
            error: error.message
        })
    }

}

const renewToken = async (req, res) => {

    const { uid, username } = req.body;

    //Genera un nuevo JWT y retorna en esta peticion
    const token = await generarJWT(uid, username)

    return res.json({
        ok: true,
        msg: 'renew',
        uid,
        username,
        token,
    })
}


module.exports = {
    createUser,
    loginUser,
    renewToken
}
