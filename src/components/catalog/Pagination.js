import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentPage } from '../../actions';

class Pagination extends React.Component {
    changePage = e => this.props.changeCurrentPage(+(e.target.id));

    previousOrNextPage = (step) => {
        const { currentPage, numberOfPages } = this.props.page;
        if((currentPage === 1 && step === -1) || (numberOfPages === currentPage && step === 1 )) return;
        this.props.changeCurrentPage(currentPage + step);
    }

    renderPagination() {
        let numberButtons = [];

        for(let i = 1; i <= this.props.page.numberOfPages; i++) {
            if(i === this.props.page.currentPage) {
                numberButtons.push(<li onClick={this.changePage} id={i} key={i} className="py-1 px-2 carrent-page">{i}</li>)
                continue;
            }
            numberButtons.push(<li onClick={this.changePage} id={i} key={i} className="py-1 px-2">{i}</li>);
        }
        return numberButtons;
    }

    setClass = (position) => {
        if(position === 'begin') {
            return this.props.page.currentPage === 1 ? 'p-1 paginationDisable': "p-1";    
        } else if (position === 'end') {
            return this.props.page.currentPage === this.props.page.numberOfPages ? 'p-1 paginationDisable': "p-1";    
        }
    }

    render() {
        return (
            <ul id="page-numbers" className="pl-0">
                <li onClick={() => this.props.changeCurrentPage(1)} key="0.1" className={this.setClass('begin')}>First</li>
                <li onClick={() => this.previousOrNextPage(-1)} key="0.2" className={this.setClass('begin')}>Previous</li>
                {this.renderPagination()}
                <li onClick={() => this.previousOrNextPage(1)} key="98" className={this.setClass('end')}>Next</li>
                <li 
                    onClick={() => this.props.changeCurrentPage(this.props.page.numberOfPages)} 
                    key="99" 
                    className={this.setClass('end')}>Last</li>
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return { page: state.page }
}

export default connect(mapStateToProps, { changeCurrentPage })(Pagination);