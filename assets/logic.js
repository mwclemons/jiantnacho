var items = [
    "assets/images/IMG_2844.JPG",
    "assets/images/IMG_2948.JPG",
    "assets/images/IMG_2950.JPG",
    "assets/images/IMG_2968.JPG",
    "assets/images/IMG_3007.JPG",
    "assets/images/IMG_3010.JPG",
    "assets/images/IMG_3012.JPG",
    "assets/images/IMG_3022.JPG",
    "assets/images/IMG_3028.JPG",
    "assets/images/IMG_3031.JPG",
    "assets/images/IMG_3039.JPG",
    "assets/images/IMG_3040.JPG",
    "assets/images/IMG_3045.JPG",
    "assets/images/IMG_3047.JPG",
    "assets/images/IMG_3048.JPG",
    "assets/images/IMG_3053.JPG",
    "assets/images/IMG_3059.JPG",
    "assets/images/IMG_3060.JPG",
    "assets/images/IMG_3061.JPG",
    "assets/images/IMG_3065.JPG",
    "assets/images/IMG_3071.JPG",
    "assets/images/IMG_3076.JPG",
    "assets/images/IMG_3081.JPG",
    "assets/images/IMG_3083.JPG",
    "assets/images/IMG_3084.JPG",
    "assets/images/IMG_3091.JPG",
    "assets/images/IMG_3101.JPG",
    "assets/images/IMG_3104.JPG",
    "assets/images/IMG_3107.JPG",
    "assets/images/IMG_3110.JPG",
    "assets/images/IMG_3112.JPG",
    "assets/images/IMG_3117.JPG",
    "assets/images/IMG_3118.JPG",
    "assets/images/IMG_3122.JPG",
    "assets/images/IMG_3124.JPG",
    "assets/images/IMG_3127.JPG",
    "assets/images/IMG_3134.JPG",
    "assets/images/IMG_3143.JPG",
    "assets/images/IMG_3144.JPG",
    "assets/images/IMG_3148.JPG",
    "assets/images/IMG_3150.JPG",
    "assets/images/IMG_3152.JPG",
    "assets/images/IMG_3154.JPG",
    "assets/images/IMG_3155.JPG",
    "assets/images/IMG_3158.JPG",
    "assets/images/IMG_3160.JPG",
    "assets/images/IMG_3161.JPG",
    "assets/images/IMG_3162.JPG",
    "assets/images/IMG_3166.JPG",
    "assets/images/IMG_3172.JPG",
    "assets/images/IMG_3177.JPG",
];


$( document ).ready(function() {
    for (var x = 0; x < items.length; x++) {
        var myItemDiv = $("<div>");
        myItemDiv.addClass("col-6 col-lg-3");
        myItemDiv.html('<img class="img-fluid" alt="" src="'+items[x]+'" ></img>');
    
        $("#items-row").append(myItemDiv);
        console.log (x)
        console.log (x % 4 === 0)
        if (x % 4 === 0) {
            var newRowDiv = $("<div>");
            newRowDiv.addClass("row");
            $("#items-row").append(newRowDiv);
        };
        
    }; 
});
