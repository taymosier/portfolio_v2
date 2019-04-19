import React, {Component} from 'react';
import { Col, TabContent } from 'reactstrap';
import { ContentNav } from './ContentNav';
import { TabbedContent } from './TabbedContent';

export class TabbedContentContainer extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.updateActiveChildTab = this.updateActiveChildTab.bind(this)
  }

  componentDidMount(){
    this.setState({
      keys: this.props.keys,
      activeSectionContent: this.props.activeSectionContent,
      activeSectionIndex: this.props.activeSectionIndex,
      activeChildKeys: this.props.activeChildKeys,
      activeChild: this.props.activeChild,
      sections: this.props.sections
    })
  }

  componentDidUpdate(){
    if(this.state.activeSectionIndex !== this.props.activeSectionIndex){
      this.setState({
        activeSectionContent: this.props.activeSectionContent,
        activeSectionIndex: this.props.activeSectionIndex,
      })
    }
    if(this.state.activeChildKeys !== this.props.activeChildKeys){
      this.setState({activeChildKeys: this.props.activeChildKeys})
    }
  }

  updateActiveChildTab(selectedTabIndex){
    this.setState({
      activeChild: selectedTabIndex
    })
  }

  render(){
    return(
      <Col
        xl={{ size: 6, offset: 0 }}
        lg={{ size: 6, offset: 0 }}
        md={{ size: 6, offset: 0 }}
        sm={{ size: 6, offset: 0 }}
        xs={{ size: 6, offset: 0 }}
        className={"about-me-left-col"}
      >
        <ContentNav
          tabs={this.state.activeChildKeys}
          updateActiveChildTab={this.updateActiveChildTab}
          activeChild={this.state.activeChild}
        />
        <TabContent
          activeTab={this.state.activeChild}
          tabs={this.state.childKeys}
        >
          <TabbedContent
            content={this.state.activeSectionContent}
          />
        </TabContent >
      </Col>
    );
  }
}
