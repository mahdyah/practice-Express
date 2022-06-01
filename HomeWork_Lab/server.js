const express=require('express')

const getTheData=require('./Controllers/getTheData')
const data=getTheData()

const app=express()
const port=3000
app.use((req, res, next)=>{
    console.log('Runnning middleware function!!!')
    next()

})
app.use(express.json())
app.set('view Engine','ejs')
app.set('views','./Views/home')


app.get('/',(req,res)=>{
    res.render('home')
    // res.send('It is working this way')
    // res.render('home',{
    //     pageTitle:'Home page',
    //     pageHeader: 'Home Page'})
})

app.listen( port,()=>{
    console.log('Server is Running . . . ')
}
)