before(() => {
    // root-level hook
    // runs once before all tests
    console.log('before por fuera')
  })
  
  beforeEach(() => {
    // root-level hook
    // runs before every test block
    console.log('before each por fuera')
  })
  
  afterEach(() => {
    // runs after each test block
    console.log('after each por fuera')
  })
  
  after(() => {
    // runs once all tests are done
    console.log('after por fuera')
  })
  
  describe('Hooks', () => {
    before(() => {
      // runs once before all tests in the block
      console.log('before')
    })
  
    beforeEach(() => {
      // runs before each test in the block
      console.log('before each')
    })

    it('test 1', () => {
        console.log('Test 1')
    })

    it('test 2', () => {
        console.log('Test 2')
    })
  
    afterEach(() => {
      // runs after each test in the block
      console.log('after each')
    })
  
    after(() => {
      // runs once after all tests in the block
      console.log('after each')
    })
  })