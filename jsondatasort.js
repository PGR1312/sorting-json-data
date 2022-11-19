
/*"userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false*/ 

    const fetch = require("node-fetch")

fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json()).
then(data=> {
    //console.log(data);
    var t=[];
    var f=[];
    for(i=0;i<data.length;i++)
    {
        if(data[i].completed)
        {
           t.push(data[i]);
           
           for(j=0;j<t.length;j++)
           {
            for(k=j+1;k<t.length;k++)
            {
                if( t[j].id < t[k].id )
                {
                    var temp=t[j];
                    t[j]=t[k];
                    t[k]=temp;
                }
            }
           }
           //console.log(t);
        }
        
        else
        {
            f.push(data[i])
            //console.log(f);
            for(j=0;j<f.length;j++)
           {
            for(k=j+1;k<f.length;k++)
            {
                if( f[j].id < f[k].id )
                {
                    var temp=f[j];
                    f[j]=f[k];
                    f[k]=temp;
                }
            }
           }
           console.log(f);
        }
    }

    
});
