const postCard = document.getElementById('post-card')


let count = 0;
const loadData =async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    console.log(data.posts)
    data.posts.forEach(post => {
        // const div = document.createElement('div');
        const divContent = document.createElement('div') 
        divContent.innerHTML = `
        
            <div id="" class="lg:flex gap-5  bg-[#F3F3F5] lg:w-[780px] rounded-2xl p-10">
            <div class="">
                <div class="indicator">
                    <span class="indicator-item badge bg-green-500"></span> 
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
            <div class="flex items-center justify-between">
                    <div class="mt-5 flex gap-10">
                        <div class="flex gap-2">
                            <img src="images/massage.svg" alt="">
                            <p>${post.comment_count}</p>
                        </div>
                        <div class="flex gap-2 items-center">
                            <i class="fa-regular fa-eye"></i>
                            <p>${post.view_count}</p>
                        </div>
                        <div class="flex gap-2 items-center">
                            <i class="fa-regular fa-clock"></i>
                            <p>${post.posted_time} min</p>
                    </div>
                
                </div>
                <div class="mt-5">
                    <img onclick= "postAdd('${post.title}', '${post.view_count}')" src="images/email 1.svg" alt="">
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


loadData()