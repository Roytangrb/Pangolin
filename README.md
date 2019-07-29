# Pangolin Project Data Catalog

## Shared Docs
### Stories
 - [20190602 Mapping the routes story](https://docs.google.com/document/d/1Gj6y-f-_dlizGP6nQR4bKfpKGlRds6O6IuUFtLEqKKM/edit)

### Data
- [Patterns and Features in CITES](https://docs.google.com/presentation/d/1PGrCWcCy-S8KxtQAuohghaG6A4mMQwjpG8JA29xRstE/edit?usp=sharing)
- [20190601 Workshop Data Session Slides](https://docs.google.com/presentation/d/1wB5cf75hAbNADG9mymg9xkDNMBLuPGhacTZpZqLVsyg/edit?usp=sharing)  
- [20190601 Pangolin data game plan](https://docs.google.com/document/d/166GK6Lsq7-NkxUqYSJ_2Kr46qFX8FZLHY8kBN6DaV5I/edit)
- [20190600 Pangolins data of China](https://docs.google.com/presentation/d/1cn4WpiCWFEn7d4mE2LN5Fhh_O121zUuyiEgqArfL5j0/edit#slide=id.g5b37640d24_0_18)
- [Malaysian court online databases](https://docs.google.com/document/d/1hfFp6oBvOlVUlm0bkr3XVjhhF6p_cHjc-wbgcEO8088/edit) - for data research
- [Vietname databases](https://docs.google.com/document/d/1OlIRVrWh6YmPyxAtV-G03G-aV9Xfdjtopz7ja6MGcRs/edit?usp=sharing) - for data research

## Visuals Template
 - [globe](https://roytangrb.github.io/pangolin/)
 - [choropleth/scatter plot](https://roytangrb.github.io/pangolin/chinamedcomp.html)

## Global Dataset
 1. [CITES Trade Database Download](https://trade.cites.org/) 
     - [Database Documentation](https://trade.cites.org/cites_trade_guidelines/en-CITES_Trade_Database_Guide.pdf )
     - Description: report records of import/export of pangolins by countries (non-transactional record)
     - Major Fields: ```Year```, ```Taxon```, ```Importer```, ```Exporter```, ```Origin```, ```Imp Quantity```, ```Imp Unit```, ```Imp Term```, ```Imp Purpose```, ```Imp Source```, ```Reporter Type```
     - Data Subset of Manidae - [data download](https://github.com/Roytangrb/pangolin/tree/master/CITIES%20Analysis/manidae.csv)
     - Size: 20 million+ records (full dataset)
     - Range: ***1975*** onwards
     - Format: CSV
     - Source: NGO
     - Remarks: ***Error data not marching headers are spliced out. Error Data and Locations can be viewed on this*** [notebook](https://github.com/Roytangrb/pangolin/blob/master/CITES%20Analysis/manidae.ipynb) (spliced out data do not concern Manidae but other species)
     - Status: Exploratory analysis. Karen filed the request, 2018 data not available until October at earliest.
     - TODO
       - [ ] calculate scales(kg) to individual number (scale to weight ratio of different species) (paul savepangolins.org)

  2. [Environmantal Investigation Agency](https://eia-international.org/wildlife/wildlife-trade-maps/illegal-trade-seizures-pangolins/)
     - [Carto link](https://tomaszjohnson.carto.com/builder/5fe400fc-8202-4c65-ac51-48dbcb052f6e/embed)
     - Description: a subset seizure incidents from 2000 to 2018, compiled from publicly available records and represents only a fraction of actual trade during that period
     - Major Fields: ```Location```, ```Volume(Est.)``` (no raw data publicly available)
     - Size: N/A
     - Range: ***2000*** - ***2018***
     - Format: Plot Map Visual
     - Source: NGO
     - Remarks: ***raw data need to be requested***
     - Status: Request Sent

  3. [Traffic reports on pangolins](https://www.traffic.org/publications/search/?q=pangolins)
     - Format: PDF 

## China Dataset
  1. [China Judgements Online Database](http://wenshu.court.gov.cn/)
     - [Repo](https://github.com/Roytangrb/pangolin/tree/master/china/wenshu)
     - Description: GUI courtcase search website tool
     - Major Fields: N/A
     - Size: 109 - 117 (search results vary)
     - Range: N/A
     - Format: Judgement text
     - Source: Judicial
     - Supplementary: 
       - [OpenLaw](http://openlaw.cn/) case summary search
       - [itslaw](https://www.itslaw.com/search?searchMode=judgements&sortType=1&conditions=searchWord%2B%E7%A9%BF%E5%B1%B1%E7%94%B2%2B1%2B%E7%A9%BF%E5%B1%B1%E7%94%B2) a more handy case search platform
       - [Working sheet from JM](https://docs.google.com/spreadsheets/d/1Bbp05Hh_fMfU17PYW_2p0d_Peab9EBmw9gDjdUGRuS0/edit?ts=5d07b09b#gid=0)

  2. [HKU Paper on Pangolin Seizures in China](https://onlinelibrary.wiley.com/doi/full/10.1111/conl.12339)
     - [Research data download](https://onlinelibrary.wiley.com/action/downloadSupplement?doi=10.1111%2Fconl.12339&file=conl12339-sup-0002-tableS1.xlsx)
     - Description: We summarize pangolin seizure data reported in public media from 2008 to 2016, incorporating often neglected small seizures reported in Chinese.
     - Major Fields: ```year```, ```province```, ```city```, ```amount```, ```unit(kg/ind/piece)```, ```status(scale/alive/meat)```, ```equal individual```, ```source country```, ```from```, ```to```, ```stop```, ```custom or not```, ```form```, ```species```, ```media source```
     - Size: 207 records
     - Range: media reports from ***2008*** - ***2016***
     - Format: Excel
     - Source: Academic (media reports, court verdicts, CITES...)

  3. [Pangolin ingredient in Chinese Medicine](https://github.com/Roytangrb/pangolin/blob/master/china/medicine_company_province_union.csv)
     - Description: Stats of hospitals using medicine with pangolin ingredients, 209 medicine companies, 78 kinds of medicine, 715 hospital
     - Major Field: ```Province```, ```Hospitals Using Medicine with pangolin ingredient```, ```Medicine name```, ```Permit ID```, ```Production Companies```
     - Size: 314 medicine-medcine_company records(Normalised)
     - Timestamp: 2016
     - Format: csv
     - Source: China Food and Drug Administration
     - Remarks: shared by Jiaming

  4. Government Stock

  5. [Pangolin related Company](https://github.com/Roytangrb/pangolin/blob/master/china/pangolin-qixin-2019-6-2.xls)
     - Description: Qixin.com pangolin keyword search
     - Major Fields: ```Company Name```, ```ID```, ```Province```, ```City```, ```Legal Representative```, ```Registered Capital```, ```Founder Date```, ```Business```, ```Tel```, ```Address```, ```Email```, ```website```
     - Size: 120 companies
     - Timestamp: 01-06-2019
     - Format: Excel (Normalised)
     - Source: Qixin open data
     - Remarks:

## Hong Kong Dataset
 1. [Hong Kong Customs Press Release data download](https://docs.google.com/spreadsheets/d/1IjPrjt--8NIioltO7pHv4X_5W4wmj48C_HzzWJL4lHg/edit#gid=69729802)
     - [Repo](https://github.com/Roytangrb/pangolin/tree/master/hkcustomdata)
     - Description: Text data on HK Customs press release
     - Major Fields: ```Year```, ```Month```, ```Date```, ```Title```, ```Url```, ```Article```
     - Size: 2352 records (all press release)
     - Range: ***2004*** - ***2018***
     - Format: TSV/Excel/Spreadsheet
     - Source: Government (self scraped & curated database)

  2. [Hong Kong Seizure Data by Karen](https://docs.google.com/spreadsheets/d/1LpIQD6fAAUldpZJg4o-HTnnWPWZxo_NZTZW7Zh-6t9w/edit?usp=sharing)
     - Description: Summarized from HK Customs data
     - Major Fields: ```Date of seizure```, ```Contraband```, ```Quantity (kg) ```, ```Other contraband```, ```Where found```, ```Seizure region```, ```Smuggled from```, ```Destination```, ```By```, ```More info about the contraband```, ```Any arrest?```, ```Worth (HK dollars)```, ```Others```, ```Notes```
     - Size: 30 records
     - Timestamp: ***2012*** - ***2019***
     - Format: Excel 
     - Source: Summarized from HK Customs data
     - Remarks:

## Taiwan Dataset
 1. [Taiwan court case](https://law.judicial.gov.tw/FJUD/default.aspx)
     - [data](https://github.com/Roytangrb/pangolin/tree/master/taiwan)
     - Description: Court case results by keyword search '穿山甲'
     - Major Fields: ```Cause of Action```, ```Court Info```, ```Date```, ```Url```
     - Size: 104 (including unrelated cases)
     - Range: ***1997*** - ***2019***
     - Format: Excel
     - Source: Taiwan Judicial

## Malaysia Dataset
 1. [Pangolin Seizure in Malaysia](https://docs.google.com/spreadsheets/d/1Im0sLEv3zeFeTQ15TWW74nhmqyqGAGNecLhDqygYm-w/edit?usp=sharing)
     - [data](https://docs.google.com/spreadsheets/d/1Im0sLEv3zeFeTQ15TWW74nhmqyqGAGNecLhDqygYm-w/edit?usp=sharing)
     - Description: Pangolin seizure cases summarised from media reports
     - Major Fields: ```Date```, ```Amount (Live)```, ```Amount (Frozen)```, ```Amount (Scales)```, ```Amount (Parts)```, ```Agg number of panglins```, ```Form/Term```, ```Location```, ```Origin```, ```Destination```, ```Person```, ```Offense```, ```Status```, ```Link```, ```Notes```
     - Size: 30
     - Range: ***2011*** - ***2019***
     - Format: Excel/Spreadsheet
     - Source: Media Reports

## Nepal Dataset
 1. Central Investigation Bureau, Nepal Police
     - [data download](https://github.com/Roytangrb/pangolin/tree/master/nepal)
     - Description: summary of pangolin operation data since 2012
     - Major Fields: N/A
     - Size: N/A
     - Range: Since ***2012***
     - Format: Summary data
     - Source: government

## Vietname Dataset
 1. [USAID - Buyer Profile](https://www.usaidwildlifeasia.org/resources/reports)
     - buyer demographics
     - need research on the comprehensive survey
     - from vietnam country report