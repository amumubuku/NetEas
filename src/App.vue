<script>
export default {
}
</script>

<style>
.container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
 .loading {
   width: 2.5em;
   height: 2.5em;
   transform: rotate(165deg);
   z-index: 9999;
 }
 .loading:before, .loading:after {
   content: '';
   position: absolute;
   top: 50%;
   left: 50%;
   display: block;
   width: 0.5em;
   height: 0.5em;
   border-radius: 0.25em;
   transform: translate(-50%, -50%);
 }
 .loading:before {
   animation: before 2s infinite;
 }
 .loading:after {
   animation: after 2s infinite;
 }

 @keyframes before {
   0% {
     width: 0.5em;
     box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
   }
   35% {
     width: 2.5em;
     box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
   }
   70% {
     width: 0.5em;
     box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
   }
   100% {
     box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
   }
 }
 @keyframes after {
   0% {
     height: 0.5em;
     box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
   }
   35% {
     height: 2.5em;
     box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
   }
   70% {
     height: 0.5em;
     box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
   }
   100% {
     box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
   }
 }
  .loading {
   position: absolute;
   top: calc(50% - 1.25em);
   left: calc(50% - 1.25em);
 }
 .ripple {
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}
.ripple:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform .2s, opacity .3s;
}
.ripple:active:after {
  transform: scale(0, 0);
  opacity: .2;
  transition: 0s;
}
</style>
