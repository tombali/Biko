var sentences = [
  'woof you know they call my mummy the worm tamer?',
  'woof i stick my paw in your biscuit jar!!',
  'poop in the gardens of akbars tomb i give to you',
  'two great big humps and then i am gone, woof',
  'woooooof i barked her eliot, chewed her yeats woof',
  'i bark sappho in the original greek',
  'woooooof actually i am the abominable snowman',
  'woooof you have to let go of the biscuit!!!!',
  'woof must be the harmonies...',
  'woof at least she died amoong the wild roses!',
  'junior high school psycho woof!!',
  'syringe almost dropped on my cookie.',
  'woof, i am afraid i barked a lie!',
  'woofa yonder! woofa yonder!!',
  'she just did not want to!!!',
  'woooooof is the guitar in your headphones woof',
  'where is mona? dont care i am not the rescue dog',
  'come to millhaven, they said...',
  'woof biko wont leave you henry',
  'step into the wooftex',
  'i do biscuit alertness course',
  'there is a doggo waiting outside your door... how much longer?',
  'woof i wanna tell you about doggo',
  'woof i will come a-running straight to you for i am captured',
  'never forget i am revolting little chihuahua...',
  'you saw me pooping there, big ears, small paws, among the pink and purple wisteria',
  'i chewed sapphos original greek',
  'there she goes, my beautiful food',
  'nothing a pair of cookies can not fix!!!!!!!!',
  'believe in seventy two virgins on a chain, not doggo',
  'she had a history but she had no pets',
  'i got an owner, she rules my house with an iron fist'];

var displayed = [];

function bark() {
  var el = document.getElementById('sentence');
  el.innerHTML = getSentence();
}

function getSentence() {
  var index = Math.floor(Math.random() * sentences.length);

  if (displayed.length === sentences.length) {
    displayed = [];
  }

  if (displayed.includes(index)) {
      return getSentence();
  }

  displayed.push(index);
  
  return sentences[index];
}
