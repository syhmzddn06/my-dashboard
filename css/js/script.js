const ctx = document.getElementById('chartA');

new Chart(ctx,{
    type:'scatter',

    data:{
        datasets:[{
            label:'Current vs Voltage',

            data:[
                {x:185.2,y:24.8},
                {x:192.6,y:25.1},
                {x:178.4,y:24.2},
                {x:205.8,y:25.9},
                {x:168.3,y:23.7}
            ]
        }]
    }
});
