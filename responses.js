function getBotResponse(input) {
    //rock paper scissors
    var regex1 = /\b(membership).*(benefits)|(benefits).*(membership)\b/g;
    var regex2 = /\b(membership|member).*(become|get|avail|take)|(become|get|avail|take).*(membership|member)\b/g;
    var regex3 = /\b(change).*(IEEE|account)\b/g;
    var regex4 = /\b(reset).*(password)\b/g;
    var regex5 = /\b(unlock).*(account|password)\b/g;
    var regex6 = /\b(change).*(password)\b/g;

    if (regex1.test(input)) {
        return "Members of IEEE have access to new resources, valuable opportunities, discounts and value added member exclusive benefits and services that will help you advance your career. Learn about these and other membership benefits by visiting the IEEE Global Benefits Finder website.";
    } else if (regex2.test(input)) {
        return "See below instructions to obtain the paper application:"+"\r\n"+"1. Go to the IEEE Home page - ieee.org\n2. Hover your mouse over Membership";
    } else if (regex3.test(input)) {
        return "Once you have signed in with your IEEE Account, your name will appear on the top right corner. Click on your name to view options to manage your account. The link to sign in is located at the top right corner of any IEEE page."+"\r\n"+"You will be able to update and view the following information:"+"\r\n"+"IEEE Account Email Address and Password"+"\r\n"+"Address Information"+"\r\n"+"Communication Preferences"+"\r\n"+"Personal Profile"+"\r\n"+"Professional and Education Information"+"\r\n"+"Security Question and Answer"+"\r\n\r\n"+"Once your changes have been made, click on 'Save' to retain your changes.";
    } else if (regex4.test(input)) {
        return "You can reset your IEEE Account password by selecting 'Forgot Password.' You will be asked to provide your name, and email or member number. Your first and last name must match your account exactly. You will have the option of answering your security question if you have one, or receiving a verification code via email or phone. If you are an IEEE Member please do not create a new account as it will not link to your membership or renewal bill. If you have not updated your username to an email address, please contact IEEE for assistance.";
    } else if (regex5.test(input)) {
        return "As part of the IEEE Account security, you have 6 attempts to provide the correct email address and password when signing in. When you enter incorrect information the first time, a warning will be shown advising that you have 5 attempts remaining. After 6 unsuccessful attempts, your account will become temporarily locked for 60 minutes for your protection. If you can not remember your password, please see 'Reset Forgotten Password' above.";
    } else if (regex6.test(input)) {
        return "You can change your current password by signing in to your IEEE Account Profile, selecting 'Profile' option and then clicking on 'Email Address and Password'. If you cannot remember your password, please see 'Reset Password' above."
    }

    // Simple responses
    if (input == "hello" || input == "hi" || input == "hey") {
        return "Hello there!";
    } else if (input == "goodbye" || "bye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}