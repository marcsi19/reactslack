import React from 'react'
import { Header, Segment, Input, Icon } from 'semantic-ui-react'

class MessagesHeader extends React.Component {
  render() {
    const { channelName, numUniqueUsers, handleSearchChange, searchLoading, isPrivateChannel, handleStar,
      isChannelStarred } = this.props
    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header fluid='true' as='h2' floated='left' style={{ marginBottom: 0 }}>
          <span>
            {channelName}
            {!isPrivateChannel && (
              <Icon
                onClick={handleStar}
                name={isChannelStarred ? 'star' : 'star outline'}
                color={isChannelStarred ? 'yellow' : 'black'}
              />
            )}
          </span>
          <Header.Subheader>{numUniqueUsers}</Header.Subheader>
        </Header>

        <Header floated='right'>
          <Input
            onChange={handleSearchChange}
            loading={searchLoading}
            size='mini'
            icon='search'
            name='serachTerm'
            placeholder='Search Messages'
          />
        </Header>
      </Segment>
    )
  }
}

export default MessagesHeader;
