import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // const { greeting, name } = this.context;
    // console.log(value);
    let { loading, featuredRooms: rooms } = this.context; // get the featuredrooms from the context api, rooms=alias
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });
    console.log(rooms);

    return (
      <section className='featured-rooms'>
        {/* {greeting} {name} from featured rooms */}
        <Title title='featured-rooms' />
        <div className='featured-rooms-center'>{loading ? <Loading /> : rooms}</div>
      </section>
    );
  }
}
