const validateContent = require('./validator')

test('Validate the content length', () => {
    expect(validateContent('he')).toBe(False);

    expect(validateContent('Here is some lengthy content')).toBe(True);
})