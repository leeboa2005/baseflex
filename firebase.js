import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAGsQqlkELF_uAF-9IRnGKncwtJMPnlMdk",
    authDomain: "sparta-78af9.firebaseapp.com",
    projectId: "sparta-78af9",
    storageBucket: "sparta-78af9.appspot.com",
    messagingSenderId: "997780523184",
    appId: "1:997780523184:web:1b28cc539b2fc7749a9375",
    measurementId: "G-2SRMYQG2TK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 데이터 추가하기
const postingBtn = document.querySelector('#postingbtn')
postingBtn.addEventListener('click', postingBtnClick)

async function postingBtnClick() {
    let imageValue = document.querySelector('#image').value;
    let titleValue = document.querySelector('#title').value;
    let starValue = document.querySelector('#star option:checked').value;
    let commentValue = document.querySelector('#comment').value;
    let doc = {
        'image': imageValue,
        'title': titleValue,
        'star': starValue,
        'comment': commentValue,
    };

    await addDoc(collection(db, "movies"), doc);
    alert('영화가 추가되었습니다!');
    window.location.reload();
}

//데이터 읽기 및 카드 생성
let docs = await getDocs(collection(db, "movies"));
docs.forEach((doc) => {
    const tagCol = document.querySelector(".mycards");
    let row = doc.data();
    let imageValue = row['image']
    let titleValue = row['title']
    let starValue = row['star']
    let commentValue = row['comment']

    tagCol.insertAdjacentHTML("beforeend", `  <div class="col">
    <div class="card h-100">
        <img src="${imageValue}"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${titleValue}</h5>
            <p class="card-star">${starValue}</p>
            <p class="card-text">${commentValue}</p>
        </div>
    </div>
</div>`)
});

 // 영화기록하기 토글
 const saveBtn = document.querySelector('#savebtn');
 saveBtn.addEventListener('click', savebtnClick)

 function savebtnClick() {
     const postingBox = document.querySelector('.mypostingbox_container');
     const openBtn = document.querySelector('.open_btn')
     const closeBtn = document.querySelector('.close_btn')
     if (postingBox.style.display == 'none') {
         postingBox.style.display = '';
         closeBtn.style.display = '';
         openBtn.style.display = 'none';
     } else {
         postingBox.style.display = 'none';
         closeBtn.style.display = 'none';
         openBtn.style.display = 'inline-block';
     }

 }

