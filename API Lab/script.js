const redditPromise = fetch( "https://www.reddit.com/r/aww/.json");

redditPromise
.then (response => response.json())
.then (data => {
    console.log(data);
    for (let awwresults of data.data.children) {
       let newPost = document.createElement('div');
       let newTitle = document.createElement('h2');
       let image = document.createElement('img');
       let pageLink = document.createElement('a');
       let description = document.createElement('p');

       newTitle.innerText = awwresults.data.title
       description.innerText = awwresults.data.description
       image.setAttribute ("src", awwresults.data.thumbnail);
       pageLink.setAttribute("href","https://www.reddit.com" + awwresults.data.permalink );
       pageLink.innerText = "Would you like to see the full article? click here"
       newPost.append(newTitle);
       newPost.append(image);
       newPost.append(pageLink);  
       newPost.append(description);
       document.body.append(newPost);


    }


});