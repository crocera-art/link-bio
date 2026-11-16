module.exports = (req, res)=>{
    const origin = req.headers.origin;

    const alloedOrigins = [
        "https://www.crocera.art",
        "https://crocera.art"
    ];
    if (alloedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin)
    }

    res.status(200).json({
        status:"Sucesso",
        message:"API funcionando corretamente"
    })

}
