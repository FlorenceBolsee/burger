#burger
 Burger menu personnalisable, Katya et Florence
 
 Le Dice-Burger dispose de 3 styles d'animation différents et peut être repositionné facilement grâce à la class .burger.
 
 Pour démarrer :
 
 Vous aurez besoin de copier-coller ce code dans l'html :
 
 <div class="burger">
 	<div class="burger__face">
 		<div class="burger__wrapper">
 			<span class="burger__span bullet span__top"></span>
 			<span class="burger__span line span__top"></span>
 			<span class="burger__span bullet span__center"></span>
 			<span class="burger__span line span__center"></span>
 			<span class="burger__span bullet span__bottom"></span>
 			<span class="burger__span line span__bottom"></span>
 		</div>
 	</div>
 	<div class="burger__side"></div>
 	<div class="burger__top"></div>
 </div>
 
 Du fichier _burger.scss et du fichier burger.js qui se trouvent dans le dossier src. Ne pas oublier de les lier.
 
 Les noms des trois animations disponibles sont "anim1", "anim2" et "anim3".  Il suffit de remplacer la propriété "classAnim"
 de la variable "burger" dans burger.js par un de ces noms pour changer d'animation.
