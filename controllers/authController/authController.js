const bcrypt = require('bcryptjs');
const { User } = require('../../database/database');
const { generarJWT } = require('../../helpers/jwt');

const createUser = async (req, res) => {
    try {
        let { username, password} = req.body;

        if (!username || !password) {
            return res.json("Faltan datos por completar");
        };

        //Encriptar la password
        const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync( password, salt );

        //Guardar en la base de datos
        const [user, create] = await User.findOrCreate({
            where: {
                username: username
            },
            defaults: {
                username,
/*                 email,
 */                password,
                /* image */
            }
        });

        if(!create) {
            return res.json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            });
        };
        // Generar JWT
        const token = await generarJWT(user.id, user.username);
        return res.json({
            ok: true,
            msg: 'Usuario creado con exito',
            uid: user.id,
            name: user.username,
/*             image: user.email,
            email: user.image, */
            token
        })
        
    } catch (error) {
        console.error(error)
        res.json({ 
            ok: false,
            msg: 'error',
            err: error
        })
    }
}

const loginUser = async (req, res) => {

    const {email, password} = req.body;
    try {        
        const user = await User.findOne({ 
            where: {email: email }
        });

        if(!user) {
            return res.json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            });
        }

        //Confirma password
        const validaPassword = bcrypt.compareSync( password, user.password);

        if( !validaPassword ){
            return res.json({
                ok: false,
                msg: 'Password incorrecta'
            })
        }

        //Generar JWT
        const token = await generarJWT(user.id, user.username);


        res.json({
            ok: true,
            uid: user.id,
            name: user.username,
            image: user.image,
            email: user.email,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'ERROR'
        })
    }

}

const renewToken = async(req, res) => {

    const {uid, username} = req.body;

    //Genera un nuevo JWT y retorna en esta peticion
    const token  = await generarJWT(uid, username)

    res.json({
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
