## restData.json data structure

{
	'red':[],
	'yellow':[],
	'green':[],
	'blue':[],
	'orange':[],
	'brown':[],
	'airport'[]	
}

### Keys in an array of one mrt line (per restaurant):
	'line'
	'name'
	'site'
	'phone'
	'full_address'
	'mrt'
	'rating'
	'reviews'
	'reviews_link'
	'reviews_tags' (Array)
	'reviews_per_score' (Object)
	'photo'
	'working_hours_old_format' (Array)
	'description'
	'location_link'
	'place_id'
	'walk_distance'
	'walk_time'
	'food_regular' (Array)
	'food_limited' (Array)
	'review_list' (Array)
	'ig_list' (Array)

### Keys in an array of 'review_list' (every google review):
	'author_title'
	'review_text'
	'review_img_urls'
	'review_link'
	'review_rating'
	'review_datetime_utc'
	
### Keys in an array of 'ig_list' (every ig review):
	'ig_writer'
	'content'
	'time'
	'url'
