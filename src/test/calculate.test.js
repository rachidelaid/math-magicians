import calculate from "../logic/calculate";

describe('testing calculate.js',()=>{
    test('click on first number',()=>{
        let obj = {
            total: null,
            next: null,
            operation: null
        }
        const result = calculate(obj,'5')
        expect(result.next).toEqual('5')
    })
    test('click on operation',()=>{
        let obj = {
            total: null,
            next: '5',
            operation: null
        }
        const result = calculate(obj,'x')
        expect(result.operation).toEqual('x')
    })
    test('click on second number',()=>{
        let obj = {
            total: '5',
            next: null,
            operation: 'x'
        }
        const result = calculate(obj,'7')
        expect(result.total).toEqual('5')
        expect(result.next).toEqual('7')
        expect(result.operation).toEqual('x')
    })
    test('click on second number',()=>{
        let obj = {
            total: '5',
            next: '7',
            operation: 'x'
        }
        const result = calculate(obj,'=')
        expect(result.total).toEqual('35')
    })
})