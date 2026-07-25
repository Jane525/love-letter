// ==============================
// 별 생성
// ==============================

const stars = document.getElementById("stars");

for (let i = 0; i < 150; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 4 + "s";

    star.style.opacity = Math.random();

    stars.appendChild(star);
}



// ==============================
// 편지 열기
// ==============================

const openBtn = document.getElementById("openBtn");

const letter = document.getElementById("letterSection");

openBtn.onclick = () => {

    letter.classList.remove("hidden");

    letter.scrollIntoView({

        behavior: "smooth"

    });

    startTyping();

};



// ==============================
// 타이핑 효과
// ==============================

const message = `

안녕, 정호오빠.

벌써 우리의 800일이네.

문득 우리가 처음 만났던 날을 떠올려봤어.

그때는 우리가 이렇게까지
서로에게 소중한 사람이 될 줄은
상상도 못했던 것 같아.

같이 웃고,

같이 맛있는 것도 먹고,

사소한 하루를 함께 보내면서

어느새 오빠는
내 하루의 가장 큰 행복이 되었어.

항상 고맙고,

항상 미안하고,

무엇보다 항상 사랑해.

앞으로도

900일,

1000일,

그 이후의 수많은 날들도

우리 둘이 함께 걸어갔으면 좋겠어.

800일 축하해.

사랑해 🤍

`;

let index = 0;

const typing = document.getElementById("typing");

function startTyping() {

    if (typing.innerHTML.length > 0) return;

    function write() {

        if (index < message.length) {

            typing.innerHTML += message.charAt(index);

            index++;

            setTimeout(write, 40);

        }

    }

    write();

}



// ==============================
// 마지막 버튼
// ==============================

const loveBtn = document.getElementById("loveBtn");

const loveText = document.getElementById("loveText");

loveBtn.onclick = () => {

    loveText.style.opacity = 1;

    createHearts();

};




// ==============================
// 하트 생성
// ==============================

const heartArea = document.getElementById("hearts");

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = ["🤍","❤️","💕","💖"][Math.floor(Math.random()*4)];

        heart.style.left = Math.random()*100+"vw";

        heart.style.fontSize = (20+Math.random()*20)+"px";

        heartArea.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },5000);

    },250);

}



// ==============================
// 800일 자동 표시
// ==============================

const startDate = new Date("2024-05-19");

const today = new Date();

const diff = Math.floor((today-startDate)/(1000*60*60*24));

const dayElement = document.getElementById("days");

if(dayElement){

    dayElement.innerHTML = diff;

}
