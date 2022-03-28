const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');

            p1.innerText = `User ID ${data.userId}`;
            p2.innerText = `Post ID ${data.id}`;
            p3.innerText = `Title ${data.title}`;
            p4.innerText = `Body ${data.body}`; ''

            document.body.appendChild(p1);
            document.body.appendChild(p2);
            document.body.appendChild(p3);
            document.body.appendChild(p4);
        });
}
document.getElementById('button').addEventListener('click', getData);