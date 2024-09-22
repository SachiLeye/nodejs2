const ph = {

    index:(req, res)=>{
        res.render('index');
    },
    about:(req, res)=>{
        res.render('about');
    },
    blog1:(req, res)=>{
        res.render('blog1');
    },
    blog2:(req, res)=>{
        res.render('blog2');
    },
    catp:(req, res)=>{
        res.render('catp');
    },
    cprivate:(req, res)=>{
        res.render('cprivate');
    },
    crewcourse:(req, res)=>{
        res.render('crewcourse');
    },
    ctraffic:(req, res)=>{
        res.render('ctraffic');
    },
    home1:(req, res)=>{
        res.render('home1');
    },
    home2:(req, res)=>{
        res.render('home2');
    },
    contact:(req, res)=>{
        res.render('contact');
    },
    pPrivacy:(req, res)=>{
        res.render('pPrivacy');
    },
    pService:(req, res)=>{
        res.render('pService');
    },
    pRegister:(req, res)=>{
        res.render('pRegister');
    },
    pFaq:(req, res)=>{
        res.render('pFaq');
    },
    pLogin:(req, res)=>{
        res.render('pLogin');
    }
};

module.exports = ph;

