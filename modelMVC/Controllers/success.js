exports.getSuccess = (req,res)=>{
    res.render('success', {
        pageTitle: 'Successful!',
        path: '/success',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
};