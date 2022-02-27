test.each(['A', 'B', 'C'])(
    'This is working: %#',
    () => expect(true).toMatchSnapshot()
)
test.each([{ NAME: 'A' }, { NAME: 'B' }, { NAME: 'C' }])(
    'This is not working: %#',
    () => expect(true).toMatchSnapshot()
)