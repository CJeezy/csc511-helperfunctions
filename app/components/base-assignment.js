import Component from '@glimmer/component';

export default class BaseAssignmentComponent extends Component {

    numArray = [1,2,3,4,5,6,7,8,9,10]
    errorArray = [1,2, 'this should cause an error', 3, 4, 'this too', 5]

    num1 = 2
    num2 = 2
    num3 = 3
    num4 = 4
}
