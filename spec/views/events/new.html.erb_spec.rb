require 'rails_helper'

RSpec.describe "events/new", :type => :view do
  before(:each) do
    assign(:event, Event.new(
      :user_id => 1,
      :name => "MyString",
      :description => "MyText",
      :twitter_username => "MyString",
      :twitter_hashtag => "MyString",
      :lat => 1.5,
      :lng => 1.5
    ))
  end

  it "renders new event form" do
    render

    assert_select "form[action=?][method=?]", events_path, "post" do

      assert_select "input#event_user_id[name=?]", "event[user_id]"

      assert_select "input#event_name[name=?]", "event[name]"

      assert_select "textarea#event_description[name=?]", "event[description]"

      assert_select "input#event_twitter_username[name=?]", "event[twitter_username]"

      assert_select "input#event_twitter_hashtag[name=?]", "event[twitter_hashtag]"

      assert_select "input#event_lat[name=?]", "event[lat]"

      assert_select "input#event_lng[name=?]", "event[lng]"
    end
  end
end
