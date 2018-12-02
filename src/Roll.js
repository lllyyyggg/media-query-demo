import React from 'react'
import './Roll.css'
class Roll extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.handleHover = this.handleHover.bind(this);
        this.state= {
            scrollL : 0
        }
    }
    handleHover() {
        var parent = document.getElementsByClassName('flex-parent')[0]
        var middle = document.getElementsByClassName('flex-middle')[0]
        let $this = this;
        parent.className.length > 'flex-parent'.length?
       
        (function(){
                parent.className = 'flex-parent';
                var timeout = setTimeout(()=>{
                    // console.log('recovery')
                    
                    middle.scrollLeft = $this.state.scrollL;
                    clearTimeout(timeout);
                }, 300) //这个延时操作很重要
        })() 
        : 
        (function(){
            parent.className += ' hover';
            $this.state= {scrollL:middle.scrollLeft}
        })()
    }

    handleClick(number) {
        if(number === 1) {
            console.log('>>>>>>>>>')
        }else {
            console.log('<<<<<<<<<')
        }

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
                    middle.scrollLeft += (number === 1 ? 1 : -1);
            }
            else {
                count -= gap;
                middle.scrollLeft += (number === 1 ? Number(gap) : -Number(gap));
                }
                if(count <= 0 || pre === middle.scrollLeft) { 
                    // console.log('clear')
                    clearInterval(interval);
                }
            },1)
        }else if(gap > 0){
            var interval2 = setInterval(function() {
                let pre = middle.scrollLeft;
                count -= 1;
                middle.scrollLeft += (number === 1 ? 1 : -1);
                if(count <= 0|| pre === middle.scrollLeft) {
                    // console.log('clear')
                    clearInterval(interval2);
                }
            },1)
        } 
    }
    
    render() {
        const content = [
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
        ];
        const handleRightClick = () => this.handleClick(-1)
        const handleLeftClick = () => this.handleClick(1)
        return (
            <div>
                <div className='flex-parent' >
                    <div className='flex-left' onClick={handleRightClick}>{'<<<'}</div>
                    <div className='flex-middle'>
                        {content.map((v, index) => {
                            return <div className='middle-item' key={index}>{v}</div>
                        })}
                    </div>
                    <div className='flex-right' onClick={handleLeftClick}>>>></div>
                </div>
                <div>
                        <button id='hover-btn' onClick={this.handleHover}>hover</button>
                </div>       
            </div>
        )
    }
}
export default Roll;