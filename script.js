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

안녕 정호오빠!

벌써 우리가 만난 지 800일이 됐네.
이번에는 특별하게 오빠 취향으로 사이트까지 만들어서 800일 편지를 써봤엉 ㅋㅋㅋ 맘에 드낭~?

요즘 내가 하고 싶은 거 많이 같이 해주려고 노력해주는 것 같아서 너무 고마워!!
일주일 내내 출근하고 주말에는 좀 쉬고 싶을 텐데, 매번 내가 놀러 가자 어디 가자 뭐 하자 계속 얘기하니까 쉽지만은 않았을 것 같아 ㅋㅋㅋㅋ 조금 줄여볼게…
오빠가 같이 해주니까 너무 신나서 그랬나 봐!

나 친구 많이 없는 거 오빠만 알잖아~
그래서 나를 위해서 많이 노력해주고, 변화해줘서 고마워. 진짜 많이 변했어. 좋은 의미로!!

요즘 연구실 출근하는 게 너무너무 힘들어서 하루하루가 버거운 느낌이었는데, 매일 퇴근하고 오빠랑 같이 웃고, 맛있는 거 먹고, 별거 아닌 얘기로 저녁 시간을 보내다 보니까 어느새 연구실도 끝을 향해 가고 있더라.

오빠가 진짜 큰 힘이 되어준 것 같아.
요즘은 오빠랑 같이 놀 시간만 기다리고 있어 ㅎㅎㅎ

요즘 내가 마음의 여유가 많이 없어서 표현을 잘 못할 때도 있고, 괜히 투정부릴 때도 있지만 항상 내 옆에 있어줘서 고마워.
그래도 이렇게 한 번 애교부리면서 오빠 마음을 녹여보도록 할겡~

800일 동안 함께해줘서 고맙고, 앞으로도 지금처럼 서로에게 편하고, 같이 있으면 좋고 행복한 사람이었으면 좋겠어.

900일, 1000일 그리고 그보다 훨씬 더 많은 날들도 오빠랑 같이 예쁜 추억 많이 만들어가고 싶어.

우리 800일 축하해.

사랑해 🤍

p.s 제주도 잘 다녀오장 ㅎㅎ


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

const startDate = new Date("2024-05-19T00:00:00+09:00");

const today = new Date();

const diff = Math.floor(
    (today - startDate) / (1000 * 60 * 60 * 24)
);

const dayElement = document.getElementById("days");

if(dayElement){

    dayElement.innerHTML = diff;

}
