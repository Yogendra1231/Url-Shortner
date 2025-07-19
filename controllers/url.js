const URL = require('../models/url')

const {nanoid} = require('nanoid');

async function handleGenerateurl(req, res){
    const body = req.body ;
    if(!body.url)return res.status(400).json("Bad Request please enter the Url");
    const shortID = nanoid(8)
    const result = URL.create({
        shortId: shortID,
        redirectUrl:body.url,
        visitedHistory:[],
        createdBy: req.user._id,

    })

    return res.status(200).render( 'Home',{id : shortID});

}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;

    const result = URL.findOne({shortId})

    res.json({clicks: result.visitedHistory.length,
        analytics: result.visitedHistory ,
    }
        
    )
}

async function handleRedirection(req, res){
     const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({shortId},
        { $push :
             {visitHistory: {timestamp : Date.now()}}
            })

    res.redirect(entry.redirectUrl);
}



module.exports = {handleGenerateurl,
    handleGetAnalytics,
    handleRedirection,
}