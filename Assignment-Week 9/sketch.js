var lexicon;
var input = "Harry Potter and the Cursed Child is the eight book in the Harry Potter series written by JK Rowling";
var paragraph = [];
var myFont;

function preload(){
  //input = loadStrings('assets/words.txt'); //array of strings
  myFont = loadFont('assets/SanFrancisco.otf'); // load fonts
}

function setup() {
  createCanvas(400, 400);
  textSize(30);
  textFont(myFont);
  lexicon = new RiLexicon();
  
  text(input, 10, 10, width, height);  
}

function mousePressed(){
  
  clear();
  
  paragraph = RiTa.tokenize(input); //turn input into Array of Strings
  
  for(var i=0; i< paragraph.length; i++){
    
     if(lexicon.isNoun(String(paragraph[i]))){
       var randomNoun = lexicon.randomWord("nn"); //randomize a noun
       paragraph.splice(i, 1, randomNoun); // replace the noun with the random noun
     }
     
     else if(lexicon.isAdjective(String(paragraph[i]))){
       var randomAdjective = lexicon.randomWord("jj"); //randomize an adjective
       paragraph.splice(i, 1, randomAdjective); // replace the adjective with the random adjective
     }
     else if(lexicon.isVerb(String(paragraph[i])) || lexicon.isAdverb(String(paragraph[i])) ) {
       //do nothing
     
       //syllables & rhymes
       var syll = RiTa.getSyllables(String(paragraph[i]));
       paragraph.splice(i, 1, syll);
       
       //var rhymeWord = lexicon.rhymes(String(paragraph[i]));
       //paragraph.splice(i, 1, rhymeWord);
     }
  }
  
  paragraph = paragraph.join(' '); //join the string into a paragraph
  
  text(paragraph, 10, 10, width, height);  

}

function draw(){
  
}