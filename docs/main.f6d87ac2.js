(()=>{"use strict";var e,n={461:(e,n,r)=>{var s=r(294),t=r(935),o=r(770),i=r(893);const u=function({interval:e,onNextColor:n}){(0,s.useEffect)((()=>{r(),setInterval((()=>{r()}),e)}),[]);const r=()=>{document.body.style.backgroundColor=n()};return(0,i.jsx)(i.Fragment,{})};function a(e){return Math.floor(Math.random()*e)}function c(){return"rgb("+a(255)+","+a(255)+","+a(255)+")"}var d=r(332);const l=function({children:e}){return(0,i.jsx)("h2",{style:{color:c()},children:e})},m={stopped:"stopped",starting:"starting",incrementing:"incrementing",isIncrementing:e=>e===m.incrementing,isStopped:e=>e===m.stopped},f=(e,n)=>{switch(n.type){case m.starting:return{...e,intervalState:m.incrementing,count:1};case m.incrementing:return{...e,count:e.count+1};case m.stopped:return{...e,intervalState:m.stopped}}},x={intervalState:m.Stopped,count:0},h=function({text:e,onCountDownCompleted:n}){const[{count:r,intervalState:t},o]=(0,s.useReducer)(f,x),u=(0,s.useRef)(0);(0,s.useEffect)((()=>{m.isIncrementing(t)&&a()}),[r,t]),(0,s.useEffect)((()=>()=>{c()}),[]);const a=()=>setTimeout((()=>{m.isStopped(t)||(r<e.length-1?o({type:m.incrementing}):n())}),1e3),c=()=>{o({type:m.stopped}),clearTimeout(u.current)};return m.isIncrementing(t)?(0,i.jsx)(l,{children:e[r]}):(0,i.jsx)(d.Z,{variant:"outlined",color:"secondary",onClick:()=>{o({type:m.starting})},children:e[r]})},w=(0,o.ZP)("div")({div:{marginTop:"1rem"}}),j=(0,o.ZP)("div")({display:"inline","button:first-of-type":{marginRight:"1rem"}}),p=(0,o.ZP)("div")({marginBottom:"1rem"}),g=function({answerInput:e,answerButton:n,clearButton:r,errorMessage:s}){return(0,i.jsxs)(w,{children:[(0,i.jsx)(p,{children:e}),(0,i.jsxs)(j,{children:[n,r]}),(0,i.jsx)("div",{children:s})]})},Q=function({onClick:e}){return(0,i.jsx)(d.Z,{variant:"contained",color:"success",onClick:e,children:"Check Answer"})},y=function({onClick:e}){return(0,i.jsx)(d.Z,{variant:"contained",color:"secondary",onClick:e,children:"Clear"})},A=(0,o.ZP)("div")({display:"flex",gap:"10px",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}),b=(0,o.ZP)(d.Z)({minWidth:0,width:"50px",height:"50px"});function O({keys:e,onKeyPressed:n}){return e.map(((e,r)=>(0,i.jsx)(b,{variant:"contained",onClick:()=>n(e),children:e},r)))}const v=function({keys:e,onKeyPressed:n}){return(0,i.jsx)(A,{children:(0,i.jsx)(O,{keys:e,onKeyPressed:n})})},S=function({onKeyPressed:e}){return(0,i.jsx)(v,{keys:["1","2","3","4","5","6","7","8","9","0"],onKeyPressed:e})},Z=function(e){return e.show?e.children:(0,i.jsx)(i.Fragment,{})},C=function({show:e}){return(0,i.jsx)(Z,{show:e,children:"Please enter an answer first"})},k="none",P="correct",E="wrong",I=function({actualAnswer:e,userAnswer:n,onEnterAnswer:r,onQuestionAnswered:t,onClearAnswer:o}){const[u,a]=(0,s.useState)(!1);return(0,i.jsx)(g,{answerInput:(0,i.jsx)(S,{onKeyPressed:e=>{u&&a(!1),r(n+e)}}),answerButton:(0,i.jsx)(Q,{onClick:()=>{""!==n?e===parseInt(n)?t(n,P):t(n,E):a(!0)}}),clearButton:(0,i.jsx)(y,{onClick:o}),errorMessage:(0,i.jsx)(C,{show:u})})},N=e=>e.components.join(" + "),T=(0,o.ZP)("h3")({display:"inline"}),M=function({question:e}){return(0,i.jsx)(T,{children:`${N(e)} = `})},B=function({onNext:e}){return(0,i.jsx)(d.Z,{variant:"contained",color:"success",onClick:e,children:"Next question"})},G=function({onEndGame:e}){return(0,i.jsx)(d.Z,{variant:"contained",color:"success",onClick:e,children:"End game"})},R=(0,o.ZP)("div")({marginTop:"1rem"}),H=function({hasMoreQuestions:e,onNextQuestion:n,onEndGame:r}){return(0,i.jsx)(R,{children:e?(0,i.jsx)(B,{onNext:n}):(0,i.jsx)(G,{onEndGame:r})})},q=(0,o.ZP)("img")({width:"10rem",marginBottom:"1rem"}),F=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(q,{src:"assets/correct.png"}),(0,i.jsx)("div",{children:"Correct!!"})]})},D=function({correctAnswer:e}){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(q,{src:"assets/oh-no.png"}),(0,i.jsx)("div",{children:"Oh No!!"}),(0,i.jsx)("div",{children:`The correct answer is ${e}`})]})},$=function({answerState:e,correctAnswer:n}){return e===P?(0,i.jsx)(F,{}):e===E?(0,i.jsx)(D,{correctAnswer:n}):(0,i.jsx)(i.Fragment,{})},K=(0,o.ZP)("h3")({display:"inline"}),_=function({answer:e}){return(0,i.jsx)(K,{children:e})},z=function({hasMoreQuestions:e,onAskNextQuestion:n,onQuestionAnswered:r,onEndGame:t}){const{nextQuestion:o,askNextQuestion:u}=function(e){const[n,r]=(0,s.useState)({components:[],answer:0}),t=()=>r(e());return(0,s.useEffect)((()=>{t()}),[]),{nextQuestion:n,askNextQuestion:t}}(n),[a,c]=(0,s.useState)(""),[d,l]=(0,s.useState)(k),m=()=>{x(),h(),u()},f=()=>{x()},x=()=>{c("")},h=()=>{l(k)},w=(e,n)=>{r(o,e,n),l(n)},j=e=>{c(e)};switch(d){case k:return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M,{question:o}),(0,i.jsx)(_,{answer:a}),(0,i.jsx)(I,{actualAnswer:o.answer,userAnswer:a,onEnterAnswer:j,onQuestionAnswered:w,onClearAnswer:f})]});case P:case E:return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)($,{answerState:d,correctAnswer:o.answer}),(0,i.jsx)(H,{hasMoreQuestions:e,onNextQuestion:m,onEndGame:t})]});default:throw new Error(`Unsupported answer state ${d}`)}},U="stopped",W="started",Y="completed",L=(0,o.ZP)("div")({position:"relative",top:"50%",transform:"translateY(-50%)"}),J=(0,o.ZP)("div")({marginLeft:"1rem",marginRight:"1rem",height:"100%"}),V=function({gameState:e,inGameStats:n,gameBoard:r,startButton:s,scoreBoard:t}){return(0,i.jsx)(J,{children:(()=>{switch(e){case U:return(0,i.jsx)(L,{children:s});case W:return(0,i.jsxs)(L,{children:[n,r]});case Y:return t;default:throw new Error(`Unknown game state ${e}`)}})()})};var X=r(573),ee=r(732),ne=r(694),re=r(926),se=r(11),te=r(896);const oe=e=>new Date(1e3*e).toISOString().substr(14,5),ie=(0,o.ZP)("div")({display:"flex",flexDirection:"column",height:"100%"}),ue=(0,o.ZP)("h3")({marginTop:"2rem"});function ae({elapsedTime:e,totalNumberOfQuestions:n,numberOfQuestionsAnsweredCorrectly:r,numberOfQuestionsAnsweredIncorrectly:s}){return(0,i.jsx)(X.Z,{size:"small",sx:{marginTop:"2rem"},children:(0,i.jsxs)(ee.Z,{children:[(0,i.jsx)(de,{name:"Time taken",value:oe(e)}),(0,i.jsx)(de,{name:"Questions asked",value:n}),(0,i.jsx)(de,{name:"Questions answered correctly",value:r}),(0,i.jsx)(de,{name:"Questions answered incorrectly",value:s})]})})}const ce=(0,o.ZP)(ne.Z)({backgroundColor:"#f0f0f5"});function de({name:e,value:n}){return(0,i.jsxs)(ce,{children:[(0,i.jsx)(re.Z,{align:"left",children:e}),(0,i.jsx)(re.Z,{align:"right",children:n})]})}function le({answerHistory:e}){return(0,i.jsx)(te.Z,{sx:{flex:"1 0px",marginTop:"1rem"},children:(0,i.jsxs)(X.Z,{size:"small",stickyHeader:!0,children:[(0,i.jsx)(se.Z,{children:(0,i.jsxs)(ne.Z,{children:[(0,i.jsx)(re.Z,{align:"center",children:"Question"}),(0,i.jsx)(re.Z,{align:"center",children:"You answered"}),(0,i.jsx)(re.Z,{align:"center",children:"Correct answer"}),(0,i.jsx)(re.Z,{})]})}),(0,i.jsx)(ee.Z,{children:e.map(((e,n)=>(0,i.jsx)(me,{question:e.question,userAnswer:e.userAnswer,answerState:e.answerState},n)))})]})})}function me({question:e,userAnswer:n,answerState:r}){const s=N(e);return(0,i.jsxs)(ne.Z,{children:[(0,i.jsx)(re.Z,{align:"center",children:s}),(0,i.jsx)(re.Z,{align:"center",children:n}),(0,i.jsx)(re.Z,{align:"center",children:e.answer}),(0,i.jsx)(re.Z,{align:"center",children:fe(r)})]})}const fe=e=>e===P?(0,i.jsx)("p",{children:"✅"}):e===E?(0,i.jsx)("p",{children:"❌"}):"",xe=function(e){const{elapsedTime:n,totalNumberOfQuestions:r,numberOfQuestionsAnsweredCorrectly:s,numberOfQuestionsAnsweredIncorrectly:t,answerHistory:o}=e;return(0,i.jsxs)(ie,{children:[(0,i.jsx)(ue,{children:"It's the end of the game, here are your results."}),(0,i.jsx)(ae,{elapsedTime:n,totalNumberOfQuestions:r,numberOfQuestionsAnsweredCorrectly:s,numberOfQuestionsAnsweredIncorrectly:t}),(0,i.jsx)(le,{answerHistory:o})]})},he=(0,o.ZP)("div")({paddingBottom:"1rem"}),we=(0,o.ZP)("h3")({margin:0,whiteSpace:"nowrap"}),je=function({elapsedSeconds:e,questionNumber:n,totalNumberOfQuestions:r}){return(0,i.jsxs)(he,{children:[(0,i.jsx)(we,{children:`Elapsed time: ${oe(e)}`}),(0,i.jsx)(we,{children:`Question ${n} of ${r}`})]})},pe=function({children:e,numberOfQuestions:n}){const{elapsedSeconds:r,resumeTimer:t,pauseTimer:o}=function(){const[e,n]=(0,s.useState)(0),[r,t]=(0,s.useState)(!1),o=(0,s.useRef)(0);(0,s.useEffect)((()=>{r&&u()}),[r,e]),(0,s.useEffect)((()=>()=>{i()}),[]);const i=()=>{t(!0)},u=()=>{o.current=setTimeout((()=>{n(e+1)}),1e3)};return{elapsedSeconds:e,pauseTimer:()=>{t(!1),clearInterval(o.current)},resumeTimer:i}}(),[i,u]=(0,s.useState)(U),{gameStatistics:a,onAskQuestion:c,onQuestionAnswered:d}=function(e){const[n,r]=(0,s.useState)({totalNumberOfQuestions:e,numberOfQuestionsAsked:0,numberOfQuestionsRemaining:e,numberOfQuestionsAnsweredCorrectly:0,numberOfQuestionsAnsweredIncorrectly:0}),t=e=>e===P?n.numberOfQuestionsAnsweredCorrectly+1:n.numberOfQuestionsAnsweredCorrectly,o=e=>e===E?n.numberOfQuestionsAnsweredIncorrectly+1:n.numberOfQuestionsAnsweredIncorrectly;return{gameStatistics:n,onAskQuestion:()=>{r({...n,numberOfQuestionsAsked:n.numberOfQuestionsAsked+1})},onQuestionAnswered:e=>{r({...n,numberOfQuestionsRemaining:n.numberOfQuestionsRemaining-1,numberOfQuestionsAnsweredCorrectly:t(e),numberOfQuestionsAnsweredIncorrectly:o(e)})}}}(n),{recordAnswer:l,answerHistory:m}=(()=>{const[e,n]=(0,s.useState)([]);return{answerHistory:e,recordAnswer:(r,s,t)=>{const o=[...e,{question:r,userAnswer:s,answerState:t}];n(o)}}})(),f=(0,s.useRef)(!1);(0,s.useEffect)((()=>()=>{x()}),[]);const x=()=>{f.current=!0};return e({gameState:i,elapsedSeconds:r,gameStatistics:a,answerHistory:m,hasMoreQuestions:a.numberOfQuestionsRemaining>0,numberOfQuestionsAsked:a.numberOfQuestionsAsked,numberOfQuestionsAnsweredCorrectly:a.numberOfQuestionsAnsweredCorrectly,numberOfQuestionsAnsweredIncorrectly:a.numberOfQuestionsAnsweredIncorrectly,onStartGame:()=>{!1===f.current&&(u(W),t())},onEndGame:()=>{u(Y)},onAskNextQuestion:()=>{return t(),c(),e=Math.floor(10*Math.random())+1,n=Math.floor(10*Math.random())+1,{components:[e,n],answer:e+n};var e,n},onQuestionAnswered:(e,n,r)=>{o(),l(e,n,r),d(r)}})},ge=function({numberOfQuestions:e,startupCountDown:n}){return(0,i.jsx)(pe,{numberOfQuestions:e,children:r=>(0,i.jsx)(V,{gameState:r.gameState,inGameStats:(0,i.jsx)(je,{elapsedSeconds:r.elapsedSeconds,questionNumber:r.numberOfQuestionsAsked,totalNumberOfQuestions:e}),startButton:(0,i.jsx)(h,{text:n,onCountDownCompleted:r.onStartGame}),gameBoard:(0,i.jsx)(z,{hasMoreQuestions:r.hasMoreQuestions,onAskNextQuestion:r.onAskNextQuestion,onQuestionAnswered:r.onQuestionAnswered,onEndGame:r.onEndGame}),scoreBoard:(0,i.jsx)(xe,{elapsedTime:r.elapsedSeconds,totalNumberOfQuestions:e,numberOfQuestionsAnsweredCorrectly:r.numberOfQuestionsAnsweredCorrectly,numberOfQuestionsAnsweredIncorrectly:r.numberOfQuestionsAnsweredIncorrectly,answerHistory:r.answerHistory})})})},Qe=(0,o.ZP)("div")({display:"grid",gridTemplateRows:"auto 1fr",justifyItems:"center",minHeight:"100%"}),ye=(0,o.ZP)("h1")({margin:0,gridRow:1}),Ae=(0,o.ZP)("div")({gridRow:2,textAlign:"center"}),be=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{interval:2e3,onNextColor:c}),(0,i.jsxs)(Qe,{children:[(0,i.jsx)(ye,{children:"Super Calculating"}),(0,i.jsx)(Ae,{children:(0,i.jsx)(ge,{numberOfQuestions:10,startupCountDown:["Start","5","4","3","2","1","GO!"]})})]})]});t.render((0,i.jsx)(be,{}),document.getElementById("app"))}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,s),o.exports}s.m=n,e=[],s.O=(n,r,t,o)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,t,o]=e[c],u=!0,a=0;a<r.length;a++)(!1&o||i>=o)&&Object.keys(s.O).every((e=>s.O[e](r[a])))?r.splice(a--,1):(u=!1,o<i&&(i=o));u&&(e.splice(c--,1),n=t())}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,t,o]},s.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return s.d(n,{a:n}),n},s.d=(e,n)=>{for(var r in n)s.o(n,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},s.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={179:0};s.O.j=n=>0===e[n];var n=(n,r)=>{var t,o,[i,u,a]=r,c=0;for(t in u)s.o(u,t)&&(s.m[t]=u[t]);if(a)var d=a(s);for(n&&n(r);c<i.length;c++)o=i[c],s.o(e,o)&&e[o]&&e[o][0](),e[i[c]]=0;return s.O(d)},r=self.webpackChunkgame_stream_search=self.webpackChunkgame_stream_search||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var t=s.O(void 0,[736],(()=>s(461)));t=s.O(t)})();