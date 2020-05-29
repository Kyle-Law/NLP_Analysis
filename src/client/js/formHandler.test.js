const { postData } = require('./formHandler');



test('Send request to local server', () => {
    expect(
        postData({content: 'Here is some good content entered by user'})
    );
})