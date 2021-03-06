class CandidatesController < ApplicationController
    def index
      @candidates = Candidate.all
    end

    def new
      @candidate = Candidate.new
    end

    def create
      @candidate = Candidate.create!(candidate_params)
      redirect_to candidate_path(@candidate)
    end

    def show
      @candidate = Candidate.find(params[:id])
    end

    def edit
      @candidate = Candidate.find(params[:id])
    end

    def update
      @candidate = Candidate.find(params[:id])
      @candidate.update(candidate_params)
      redirect_to candidate_path(@candidate)
    end

    def destroy
      @candidate = Candidate.find(params[:id])
      @candidate.destroy
      redirect_to candidates_path
    end

    private
    def candidate_params
      params.require(:candidate).permit(:first_name, :last_name, :email, :gender, :ip_address, :date_of_birth)
    end
end
