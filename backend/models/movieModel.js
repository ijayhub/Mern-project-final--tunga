import mongoose from "mongoose";



const movieSchema = mongoose.Schema(
	{
		title: {
			type: 'string',
			required: true,
		},
		release: {
      type: String,
			required: true,
		},

		rating: {
			type: Number,
			required: true,
    },
    genre: {
      type: String,
			required: true,
    },
    plot: {
      type: String,
			required: true,
    },
		notes: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
export const Movie = mongoose.model('Movie',  movieSchema )