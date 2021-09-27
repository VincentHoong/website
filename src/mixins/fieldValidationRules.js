export default {
    email(v) {
     return !!(v || '').match(/@/) || 
     'Please enter a valid email';
    },
    length(min)
    {
        return function(v) {
            return (v || '').length >= min || 
            'Invalid character length, required '+min;
        }
    },
    number(v) {
        return !!parseInt(v) || 
        'Please enter a valid number';
    },
    password(v) {
        return !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        'Password must contain an upper case letter, a numeric character, and a special character';
    },
    required(v) {
        return !!v || 
        'This field is required';
    },
}