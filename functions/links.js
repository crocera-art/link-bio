module.exports = (req, res)=>{
    const origin = req.headers.origin;

    const allowedOrigins = [
        "https://www.crocera.art",
        "https://crocera.art"
    ];
    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin)
    }

    res.status(200).json({
        status:"Sucesso",
        message:"API funcionando corretamente"
    })

}
