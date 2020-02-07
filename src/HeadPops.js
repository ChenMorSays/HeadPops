var HeadPops=HeadPops||(function () {

   //Accessible only here
   var privateArray=[];

   //Cannot be called from outside this function
   var privateFunction=function(){
      var css = `

      a {
         line-height: 19px;
      }

      a:hover {
         color: #30a178;
      }

      .masterDiv {
         position: absolute;
         bottom: 30px;
         right: 30px;
      }

      .link {
      margin-top: -104px; margin-left: -10px; float: right; border-bottom-style: none;
      transition: all 150ms ease; max-width: 100%; display: inline-block; padding-top: 5px;
      border-bottom: 1px solid transparent;
      color: #006899;
      line-height: 19px;
      text-decoration: none;
      background-color: transparent;
      cursor: pointer;
      // background: #F4F4F4;
      }

      .link:hover {
         border-bottom-style: none;
         border-bottom-width: 0;
      }

      .link img {
         display: block;
          margin-top: 20px;
          margin-bottom: 0;
          border-style: solid;
          border-width: 1px;
          border-color: rgba(129,174,233,.58);
          border-radius: 58px;
          box-shadow: none;
         transition: border 150ms ease;
         border: 0;
         vertical-align: middle;
         width: 85px;
         max-width: 100%;
         color: #006899;
         line-height: 19px;
      }

      .link img:hover {
         border: 1px solid #acdabd;
         box-shadow: none;
      }

      .nameDiv {
         margin-top: 6px;
          margin-left: -5px;
          text-align: center;

      }

      .nameDiv span {
         margin-right: 1px;
         font-size: 12px;
         text-align: center;
      }
      `,
          head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style');
      head.appendChild(style);

      style.type = 'text/css';
      if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      var divStyle = "position:absolute;"
      var body = document.getElementsByTagName('body');
      var linkStyle = `margin-top: -104px; margin-left: -10px; float: right; border-bottom-style: none;
      transition: all 150ms ease; max-width: 100%; display: inline-block; padding-top: 5px;
      border-bottom: 1px solid transparent;
      color: #006899;
      line-height: 19px;
      text-decoration: none;
      background-color: transparent;
      cursor: pointer;
      background: #F4F4F4;`
      var imgStyle = ``
      document.body.innerHTML += `
      <div class="masterDiv">
         <a href="https://twitter.com/ChenMorSays" target="_blank" class="link">
            <img src="https://en.gravatar.com/avatar/ea62e9a8748d8e22ec42b2f20cba78b5" width="85" alt="Chen Mor Headshot">
            </img>
            <div class="nameDiv">
               <span>@</span>
               Chen
            </div>
         </a>
      </div>`;
   }

   //Return only what must be publicly accessible, in this
   //case only the show() method
   return {
      show: function(input){
         privateFunction();
         alert(input);
      }
   }
})();
