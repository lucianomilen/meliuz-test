import React, { Fragment, Component } from "react";
import DiscoItem from "./DiscoItem";
import styled from "styled-components";
import Modal from "react-modal";
import DiscoService from "../../../services/DiscoService";
import DiscoDetail from "./DiscoDetail";
import loading from "../../../assets/images/loader.gif";
import modalStyle from "./ModalStyle";

const ListContainer = styled.div`
  margin: auto;
`;

const LoadMoreBtn = styled.button`
  border-radius: 20px;
  background: #549ae6;
  color: #fff;
  display: flex;
  cursor: pointer;
  margin: 20px auto;
  width: 120px;
  font-size: 13px;
  justify-content: center;
  height: 35px;
  font-weight: 500;
  &:hover {
    background: #4a88cb;
  }
`;

const LoadingIcon = styled.img`
  margin: auto;
  text-align: center;
  display: flex;
  padding-top: 20px;
`;

Modal.setAppElement("#root");

//should be functional component, but react-modal needs state management
export default class DiscoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      selectedDisc: {},
      page: 1
    };
  }

  //opens modal with the basic release info
  openModal(disco) {
    //fetches from api to get other info (like tracklist)
    DiscoService.fetchDiscoDetail(disco).then(discoDetail => {
      //after successful fetch sets selectedDisc and opens modal
      this.setState({ selectedDisc: discoDetail });
      this.setState({ modalIsOpen: true });
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  //load more items after setState callback
  loadMore() {
    this.setState({ page: this.state.page + 1 }, () =>
      this.props.fetchDiscoList(this.props.artist.value, this.state.page)
    );
  }

  render() {
    const props = this.props;
    return (
      <Fragment>
        {/*renders discoItems based on discoList*/}
        <ListContainer>
          {props.discoList.map((disco, index) => (
            <DiscoItem
              key={index}
              openModal={disco => this.openModal(disco)}
              disco={disco}
            />
          ))}
        </ListContainer>
        {/*shows load more btn if loading has finished*/}
        {!props.loading && (
          <LoadMoreBtn onClick={() => this.loadMore()}>LOAD MORE</LoadMoreBtn>
        )}
        <Modal
          isOpen={this.state.modalIsOpen}
          className="modal"
          style={modalStyle}
          onRequestClose={() => this.closeModal()}
          contentLabel="Disc Detail Modal"
        >
          <DiscoDetail
            disco={this.state.selectedDisc}
            artist={props.artist}
            closeModal={() => this.closeModal()}
          />
        </Modal>
        {/*loading icon*/}
        {props.loading && <LoadingIcon src={loading} />}
      </Fragment>
    );
  }
}
