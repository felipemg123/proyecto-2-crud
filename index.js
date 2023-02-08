const input_estudiantes = document.querySelector('#estudiantes')
const input_tareas = document.querySelector('#tareas')
const input_submit = document.querySelector('#agregar')
const listado = document.querySelector('.listado')



document.addEventListener("DOMContentLoaded",() =>{

    const estudiantes =JSON.parse(localStorage.getItem('estudiantes'));

    
    if (!estudiantes){
        const p = document.createElement('p');
        const text = document.createTextNode('text')
        p.appendChild(text)
        listado.appendChild(p)
        

        
        
        
    } else{
        
        if(estudiantes.length > 0){
            
            
            for(let i = 0; i < estudiantes.length; i++ ){

                const p = document.createElement('p');
                const text = document.createTextNode(estudiantes[i])
                p.appendChild(text)
                listado.appendChild(p)

            }

        }else{
            const p = document.createElement('p');
            const text = document.createTextNode('vacio')
            p.appendChild(text)
            listado.appendChild(p)
            
        }


    }

    input_submit.addEventListener('click', () => {

        
        const estudiantes = JSON.parse(localStorage.getItem('estudiantes')) || [];
        console.log(input_estudiantes.value);
        const nuevoestudiantes = input_estudiantes.value;
        estudiantes.push(nuevoestudiantes);
        localStorage.setItem('estudiantes',JSON.stringify(estudiantes));
        
        

    
    if (!estudiantes){
        const p = document.createElement('p');
        const text = document.createTextNode('text')
        p.appendChild(text)
        listado.appendChild(p)
        

        
        
        
    } else{
        
        if(estudiantes.length > 0){
            
            
            for(let i = 0; i < estudiantes.length; i++ ){

                const p = document.createElement('p');
                const text = document.createTextNode(estudiantes[i])
                p.appendChild(text)
                listado.appendChild(p)

            }

        }else{
            const p = document.createElement('p');
            const text = document.createTextNode('vacio')
            p.appendChild(text)
            listado.appendChild(p)
            
        };
        
    }
        


        

    })
    
    
        
    
    
});