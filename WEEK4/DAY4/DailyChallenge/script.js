// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// 1. Create a class named Video. The class should be constructed with the following parameters:
//    --title (a string)
//    --uploader (a string, the person who uploaded it)
//    --time (a number, the duration of the video - in seconds)
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    // 2. Create a method called watch() which displays a string as follows:
    //    “uploader parameter watched all time parameter of title parameter!”
    watch() {
        let sentence = `${this.uploader} watched all ${this.time} seconds of ${this.title}`;
        console.log(sentence);
    }
}
// 3. Instantiate a new Video instance and call the watch() method.
let myVideo = new Video("Fight Club", "Tyler", 9000);
myVideo.watch();

// 4. Instantiate a second Video instance with different values.
let myOtherVideo = new Video("Up in the Air", "George", 8300);
myOtherVideo.watch();

// 5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//    Think of the best data structure to save this information within the array.
// 6. Bonus: Loop through the array to instantiate those instances.