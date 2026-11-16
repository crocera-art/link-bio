module.exports = (res, req)=>{
    const origin = req.headers.origin;

    const alloedOrigins = [
        "www.crocera.art",
        "crocera.art"
    ];
    if (alloedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin)
    }

    res.status(200).json({
        status:"Sucesso",
        message:"API funcionando corretamente"
    })

}
