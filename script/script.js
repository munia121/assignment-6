const postCard = document.getElementById('post-card')
const cardContainer = document.getElementById('card-container')
const emptyData = document.getElementById('empty-data')


let count = 0;
const loadData =async (categoryName) =>{
    
    document.getElementById('loading-spinner').style.display = 'block'
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`);
    const data = await res.json();
    // document.getElementById('loading-spinner').style.display = 'none'
    console.log(data)
    setTimeout(() => {
        document.getElementById('loading-spinner').style.display = 'none'
    }, 2000);


    if(data.posts.length === 0){
        emptyData.style.display = 'block'
    }
    else{
        emptyData.style.display = 'none'
    }
   

    // console.log(data.posts)
    postCard.innerHTML= '';
   
    data.posts.forEach(post => {
       
        console.log(post.isActive)
        // const div = document.createElement('div');
        const divContent = document.createElement('div') 
        divContent.innerHTML = `
        
            <div id="" class="lg:flex gap-5  bg-[#F3F3F5] lg:w-[780px] rounded-2xl p-10">
            <div class="">
                <div class="indicator">
                    <span id='indicate' class="indicator-item badge  ${post.isActive?'bg-green-500':'bg-red-500'}"></span>
                    <div class="grid w-32 h-32 bg-base-300 place-items-center">
                        <img src="${post.image}" alt="">
                    </div>
                </div>
            </div>
            <!-- **** -->
            <div>
                <div class="flex gap-5">
                    <p>#${post.category}</p>
                    <p>Author: ${post.author.name}</p>
                </div>
                <h1 class="text-xl font-bold mt-4">${post.title}</h1>
                <p class="lg:w-[500px] text-[#0C0D2D99] mt-5">${post.description}</p>
                <hr class="mt-5">
                <div class="lg:flex items-center justify-between">
                    <div class="mt-5 flex lg:gap-10 gap-4">
                        <div class="flex gap-2">
                            <img src="images/massage.svg" alt="">
                            <p>${post.comment_count}</p>
                        </div>
                        <div id='views' class="flex gap-2 items-center">
                            <i class="fa-regular fa-eye"></i>
                            <p>${post.view_count}</p>
                        </div>
                        <div id='views' class="flex gap-2 items-center">
                            <i class="fa-regular fa-clock"></i>
                            <p>${post.posted_time} min</p>
                    </div>
                
                </div>
                <div class="mt-5">
                    <img onclick= "postAdd('${post.title}','${post.view_count}')" src="images/email 1.svg" alt="">
                </div>   
            </div>
            </div>
        </div>
        `;

        postCard.appendChild(divContent)

    });
}


const postAdd = (data,view) =>{
    
    console.log(data,view)
    const titleContainer = document.getElementById('title-container');
    const div = document.createElement('div');
    div.classList.add('flex')
    div.classList.add('gap-[50px]')
    div.classList.add('bg-white')
    div.classList.add('rounded-2xl')
    div.classList.add('justify-center')
    div.classList.add('p-2')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    p1.innerText = data
    p2.innerText = view
    div.appendChild(p1)
    div.appendChild(p2)
    titleContainer.appendChild(div)


    count++;
    const initialValue = document.getElementById('initial-value');
    initialValue.innerText = count;
    console.log(count)

}

// const searchFetch = async (categoryName) =>{
//     const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`)
//     const data = await res.json();
//     console.log(data)
// }


const searchBtn = () =>{
    const inputField = document.getElementById('input-field').value; 
    loadData(inputField)
    inputField.value ='';
      
}

// searchFetch()


loadData('comedy')


     
const fetchData = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data =await res.json();
    // console.log(data)
    data.forEach(card =>{
        

        let post_date = '';
        let design = '';
        // console.log(card.author.designation)
        if(card.author.designation){
            design = card.author.designation
        }
        else{
            design ='Unknown'
        }
        

        if(card.author.posted_date){
            post_date= card.author.posted_date;
        }
        else{
            post_date = 'No publish date'
        }


        const div = document.createElement('div');
        div.innerHTML = `
            <div class="h-[500px]  lg:w-[375px] border rounded-lg p-5">
            <div>
                <img class="h-[250px] rounded-lg" src="${card.cover_image}" alt="">
            </div>
            <div class="flex items-center gap-2 mt-5">
                <i class="fa-regular fa-calendar"></i>
                <p>${post_date}</p>
            </div>
            <p class="font-bold">${card.title}</p>
            <p class="mt-4 text-[#0C0D2D99]">${card.description}</p>
            <div class="mt-1 flex gap-4">
                <img class="w-10 h-10 rounded-full border" src="${card.profile_image}" alt="">
                <div>
                    <p class="font-bold">${card.author.name}</p>
                    <p>${design}</p>
                </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(div)
    })
}
fetchData()