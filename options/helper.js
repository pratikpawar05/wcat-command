function helperFn() {
    let help=`General Syntax:
    wcat [options] [files]
    
    
    option to remove big line break (-s)
    option to add line number to non empty lines (-b)
    option to add line numbers to all lines (-n) 
    
    Commands:
    
    1- wcat filename => displays content of the file in the terminal 
    2- wcat filename1 filename2 filename3... => displays content of all files in the terminal(contactinated form) in the given order.
    3- wcat -s filename => convert big line breaks into a singular file 
    4- wcat -n filename => give numbering to all the lines 
    5- wcat -b filename => give numbering to non-empty lines 
    6- wcat filename > filename2 => put all the content of filename into filename2 by overriding also creates filename2 if it doesn't exist.
    7- wcat filename >> filename2 => append all the content of filename into filename2
    8- wcat -s filename > filename2 =>get the file content of filename remove large spaces and save the output in filename2
    `;
    console.log(help);
}

module.exports={
    helperFn
}