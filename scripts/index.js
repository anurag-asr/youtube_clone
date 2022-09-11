
const apikey = "AIzaSyDZu7_hxULDOgCSr5iJBgO7O43UNqKfOcQ";

document.getElementById("search_input").addEventListener("keyup",function(event){
    event.preventDefault();
    if(event.keyCode===13){
        document.getElementById("search").click();
    }
})
let searchVideos = async() =>{
    event.preventDefault()
    try{
        const p = document.getElementById("search_input").value;
        const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${p}%202&key=${apikey}`;
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.items)
        append(data.items)
    }
    catch(err){
        console.log(err)
    }
}
let moveiArr = JSON.parse(localStorage.getItem("video")) || [];
const append = (video) => {
    let show_videos = document.querySelector("#show_videos");
    show_videos.innerHTML = null;

    video.forEach(({id,id:{videoId},snippet:{title,channelTitle,thumbnails:{default:{url}}}}) => {
        let div = document.createElement("div");
        div.setAttribute("id","contain")

        let img = document.createElement("img"); 
        img.src = url;
        img.style.height="70%"
        img.style.width="100%"

        console.log(id)
        let name = document.createElement("p");
        name.innerText = title;

        let channel = document.createElement("p");
        channel.innerText = channelTitle;
        channel.style.marginLeft="25px"
        channel.style.color="grey"

        div.append(img,name,channel);

        let data = {
            videoId,
            title,
            channelTitle,
            id
        }

        div.onclick = () => {
           showdata(data);
        }

        show_videos.append(div);

    });
}

let showdata = (data) =>{
    moveiArr.splice(data,1);
    localStorage.setItem("video",JSON.stringify(moveiArr))
    moveiArr.push(data);
    localStorage.setItem("video",JSON.stringify(moveiArr))
    window.location.href = "video.html"
}

let populerVideos = async()  => {   
    try{
        const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=IN&key=${apikey}`
        let res = await fetch(video_url);
        let data = await res.json();
        console.log(data.items)
        append(data.items)
    }
    catch(err){
        console.log(err)
    }
}
populerVideos()
