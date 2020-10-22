import React, { Component } from 'react'

class CreateProtest extends Component {
    render() {
        return (
            <div className="createprotest">
                <div className="createprotest__content">
                    <div className="createprotest__header">Create Protest</div>
                    <form className="createprotest__form" action='post'>
                        <div className="createprotest__body">
                            <div className="createprotest__left">
                                <div className="createprotest__item">
                                    <label className="createprotest__label">Image</label>
                                    <input type="file" name="pimage" className="createprotest__input input" accept="image/*" />
                                </div>
                                <div className="createprotest__item">
                                    <label className="createprotest__label">Protest Name</label>
                                    <input type="text" name="pname" className="createprotest__input input" placeholder="Protest Name" />
                                </div>
                                <div className="createprotest__item">
                                    <label className="createprotest__label">Date</label>
                                    <input type="date" name="pdate" className="createprotest__input input" />
                                </div>
                                <div className="createprotest__item">
                                    <label className="createprotest__label">Category</label>
                                    <input type="text" name="pcategory" className="createprotest__input input" placeholder="Category" />
                                </div>
                            </div>

                            <div className="createprotest__right">
                                <div className="createprotest__item">
                                    <label className="createprotest__label">Time</label>
                                    <input type="time" name="ptime" className="createprotest__input input" />
                                </div>
                                <div className="createprotest__item">
                                    <label className="createprotest__label">Location - latitude</label>
                                    <input type="text" name="plat" className="createprotest__input input" placeholder="Location - latitude" />
                                </div>
                                <div className="createprotest__item">
                                    <label className="createprotest__label">Location - longitude</label>
                                    <input type="text" name="plng" className="createprotest__input input" placeholder="Location - longitude " />
                                </div>
                            </div>
                        </div>

                        <div className="createprotest__bottom">
                            <label className="createprotest__label">Description</label>
                            <textarea className="createprotest__textarea textarea" placeholder="Add a description of the protest"></textarea>
                        </div>

                        <div className="createprotest__panel">
                            <button className="createprotest__button">Publish</button> 
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateProtest;