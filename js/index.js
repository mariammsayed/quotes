var AllQuotes = [
    {'author': '--Marilyn Monroe', 
    'quote': 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.'
    },
    {'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
    'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
    'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
    'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': '--Marilyn Monroe', 
    'quote': 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.'
    },
    {'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
    'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
    'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
    'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': '--Marilyn Monroe', 
    'quote': 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.'
    },
    {'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
    'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
    'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
    'quote': 'Do not take life too seriously. You will not get out alive.'
    },
];

function DisplayQuote(){
    var random = Number.parseInt(Math.random()*AllQuotes.length + 1);
    document.getElementById('quote').innerHTML = `\"${AllQuotes[random].quote}\"`;
    document.getElementById('auther').innerHTML = `\"${AllQuotes[random].author}\"`;
}