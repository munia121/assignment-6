const postCard = document.getElementById('post-card')

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
                    <p>#Music</p>
                    <p>Author:Aliwa Diyan</p>
                </div>
                <h1 class="text-xl font-bold mt-4">10 Kids Unaware of Their Halloween Costume</h1>
                <p class="lg:w-[500px] text-[#0C0D2D99] mt-5">It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>
                <hr class="mt-5">
            <div class="flex items-center justify-between">
                    <div class="mt-5 flex gap-10">
                        <div class="flex gap-2">
                            <img src="images/massage.svg" alt="">
                            <p>560</p>
                        </div>
                        <div class="flex gap-2 items-center">
                            <i class="fa-regular fa-eye"></i>
                            <p>560</p>
                        </div>
                        <div class="flex gap-2 items-center">
                            <i class="fa-regular fa-clock"></i>
                            <p>5 min</p>
                    </div>
                
                </div>
                <div class="mt-5">
                    <img src="images/email 1.svg" alt="">
                </div>   
            </div>
            </div>
        </div>
        `;
        postCard.appendChild(divContent)
    });
}
loadData()