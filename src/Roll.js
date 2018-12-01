import React from 'react'
import './Roll.css'
class Roll extends React.Component {
    constructor(props) {
        super(props);
        this.handleLeftClick = this.handleLeftClick.bind(this);
        this.handleRightClick = this.handleRightClick.bind(this);
    }
    handleLeftClick() {
        console.log('<<<<<<<<<')
        var middle = document.getElementsByClassName('flex-middle')[0]
        var middleItem = document.getElementsByClassName('middle-item')[0]; 
        let count = middleItem.offsetWidth * 7;
        let gap = (count / 100);
        gap = gap.toFixed(0);
        if(gap >= 1) {
            var interval = setInterval(function() {
            let pre = middle.scrollLeft;
                
            if(count < 5) {
                    count -= 1;
                    middle.scrollLeft += 1;
            }
            else {
                count -= gap;
             
                    middle.scrollLeft += Number(gap);
                }
                if(count <= 0 || pre === middle.scrollLeft) { 
                    console.log('clear')
                    clearInterval(interval);
                }
            },1)
        }else if(gap > 0){
            var interval2 = setInterval(function() {
                let pre = middle.scrollLeft;
                count -= 1;
                middle.scrollLeft += 1;
                if(count <= 0|| pre === middle.scrollLeft) {
                    console.log('clear')
                    clearInterval(interval2);
                }
            },1)
        }

        
    }   
    handleRightClick() {
        console.log('>>>>>>>>>')
        var middle = document.getElementsByClassName('flex-middle')[0]
        var middleItem = document.getElementsByClassName('middle-item')[0]; 
        let count = middleItem.offsetWidth * 1;
        let gap = (count / 100);
        gap = gap.toFixed(0);
        if(gap >= 1) {
            var interval = setInterval(function() {
            let pre = middle.scrollLeft;
            if(count < 5) {
                    count -= 1;
                    middle.scrollLeft -= 1;
            }
            else {
                count -= gap;
                middle.scrollLeft -= Number(gap);
                }
                if(count <= 0 || pre === middle.scrollLeft) { 
                    console.log('clear')
                    clearInterval(interval);
                }
            },1)
        }else if(gap > 0){
            var interval2 = setInterval(function() {
                let pre = middle.scrollLeft;
                count -= 1;
                middle.scrollLeft -= 1;
                if(count <= 0|| pre === middle.scrollLeft) {
                    console.log('clear')
                    clearInterval(interval2);
                }
            },1)
        }
    }
    render() {
        const content = [
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
        ];
        return (
            <div className='flex-parent' >
                <div className='flex-left' onClick={this.handleLeftClick}>{'<<<'}</div>
                <div className='flex-middle'>
                    {content.map((v, index) => {
                        return <div className='middle-item' key={index}>{v}</div>
                    })}
                </div>
                <div className='flex-right' onClick={this.handleRightClick}>>>></div>
            </div>
        )
    }
}


export default Roll;