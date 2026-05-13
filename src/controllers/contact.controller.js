export const sendContact = async (req,res,next) => {

const {name,email} = req.body;
const contact = await contactService.sendContactEmail(req.body)
res.json({ message: 'Message envoyé avec succès' })
}